package com.fire.onboarding.model.dao;

import com.fire.onboarding.model.entitys.Credit;
import org.springframework.data.repository.CrudRepository;


public interface ICreditDao extends CrudRepository<Credit, Long> {
}
